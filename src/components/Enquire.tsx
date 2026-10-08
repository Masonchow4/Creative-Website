import {useEffect, useRef, useState, type FormEvent} from 'react';
import {brand, enquire} from '../content';
import {useFitText} from '../hooks/useFitText';
import {useReveals} from '../hooks/useReveals';
import {clamp, easeOutCubic} from '../lib/math';
import {onFrame} from '../lib/scroll';
import {CurveEdge} from './CurveEdge';

type Status = 'idle' | 'invalid' | 'sent';

/** Let visitors sketch their relaunch customization locally. */
export function Enquire() {
  const ref = useReveals<HTMLElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [summary, setSummary] = useState('');
  const markRef = useFitText<HTMLSpanElement>();
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  // The wordmark rises out of its masks, letter by letter, as you reach it.
  useEffect(() => {
    let last = -1;
    return onFrame(() => {
      const mark = markRef.current;
      if (!mark) return;
      const r = mark.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top > vh + 50 || r.bottom < -50) return;
      const k = clamp((vh - r.top) / (r.height * 1.6 + vh * 0.25));
      if (Math.abs(k - last) < 0.0008) return;
      last = k;
      const n = letterRefs.current.length;
      letterRefs.current.forEach((el, i) => {
        const e = easeOutCubic(clamp((k - (i / n) * 0.45) / 0.55));
        el.style.transform = `translate3d(0, ${(1 - e) * 105}%, 0) rotate(${(1 - e) * 8}deg)`;
      });
    });
  }, [markRef]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('invalid');
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const initials = String(d.get('initials')).toUpperCase();
    const palette = String(d.get('palette'));
    const student = d.get('student') ? ' Student offer selected.' : '';
    setStatus('sent');
    setSummary(`Your concept: ${palette}, initials ${initials}.${student} Saved in this preview only.`);
  };

  const field =
    'w-full border-b border-ink/25 bg-transparent py-3 text-body text-ink outline-none placeholder:text-ink/40 focus:border-oxblood user-invalid:border-oxblood-lit';

  return (
    <section ref={ref} id="enquire" aria-labelledby="enquire-title" className="relative bg-linen px-4 pt-24 pb-8 text-ink sm:px-6 md:px-[4vw] md:pt-36">
      <CurveEdge color="var(--color-linen)" />
      {/* Linen weave. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgb(12 11 10 / 0.035) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgb(12 11 10 / 0.035) 0 1px, transparent 1px 4px)',
        }}
      />
      <div className="relative grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5" data-reveal>
          <p className="font-mono text-label text-oxblood uppercase">{enquire.eyebrow}</p>
          <h2 id="enquire-title" className="mt-4 text-display font-extralight uppercase">
            <span className="wide block font-display">{enquire.heading[0]}</span>
            <span className="block font-serif normal-case italic">{enquire.heading[1]}</span>
          </h2>
          <p className="mt-6 max-w-[26rem] text-body text-ink/70">{enquire.body}</p>
          <img src={enquire.paletteImage} alt="Color palette bands in coral, red, purple, and yellow tones." width={976} height={948} loading="lazy" decoding="async" className="mt-8 aspect-[2/1] w-full max-w-[26rem] rounded-sm object-cover" />
          <figure className="mt-6 max-w-[16rem]">
            <img src={enquire.signatureImage} alt="A handwritten signature-style sample, offered as personalization inspiration." width={589} height={342} loading="lazy" decoding="async" className="w-full mix-blend-multiply" />
            <figcaption className="mt-2 font-mono text-[0.625rem] tracking-[0.12em] text-ink/50 uppercase">A personal mark, your way</figcaption>
          </figure>
        </div>

        <form noValidate onSubmit={onSubmit} aria-describedby="enquire-status" className="space-y-5 md:col-span-6 md:col-start-7" data-reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-label text-ink/55 uppercase">Your initials</span>
              <input name="initials" required minLength={1} maxLength={3} pattern="[A-Za-z]{1,3}" placeholder="M C" className={field} onInput={() => setStatus('idle')} />
            </label>
            <label className="block">
              <span className="font-mono text-label text-ink/55 uppercase">Student pricing</span>
              <span className="mt-3 flex items-center gap-3 text-body text-ink/75"><input name="student" type="checkbox" className="size-4 accent-oxblood" /> I’m a high school or college student</span>
            </label>
          </div>
          <fieldset>
            <legend className="font-mono text-label text-ink/55 uppercase">Choose a color direction</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {enquire.palettes.map((ed, i) => (
                <label key={ed} className="cursor-pointer">
                  <input type="radio" name="palette" value={ed} defaultChecked={i === 0} className="peer sr-only" />
                  <span className="block rounded-full px-4 py-2 text-[0.875rem] ring-1 ring-ink/25 transition-colors peer-checked:bg-ink peer-checked:text-linen peer-checked:ring-ink peer-focus-visible:outline peer-focus-visible:outline-oxblood">
                    {ed}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block">
            <span className="font-mono text-label text-ink/55 uppercase">Color inspiration</span>
            <textarea name="note" rows={3} placeholder="School colors, favorite colors, or a club to rep…" className={`${field} resize-none`} />
          </label>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <button type="submit" className="group flex items-center gap-3 rounded-full bg-oxblood px-7 py-4 font-mono text-label text-chalk uppercase transition-colors hover:bg-ink">
              Build my concept
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <span className="font-mono text-label text-ink/60 uppercase">Student discount planned for relaunch</span>
          </div>
          <p id="enquire-status" role="status" className="min-h-[1.25rem] text-[0.8125rem] text-ink/70">
            {status === 'invalid' && 'Enter 1–3 letters for your initials.'}
            {status === 'sent' && summary}
          </p>
        </form>
      </div>

      {/* Wordmark, edge to edge. */}
      <p className="relative mt-24 leading-none md:mt-36" aria-hidden="true">
        <span ref={markRef} className="wide inline-block font-display leading-[0.78] font-extralight whitespace-nowrap text-oxblood">
          {[...brand.wordmark].map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.04em] align-bottom">
              <span
                ref={(el) => {
                  if (el) letterRefs.current[i] = el;
                }}
                className="inline-block origin-bottom-left will-change-transform"
                style={{transform: 'translate3d(0,105%,0)'}}
              >
                {ch}
              </span>
            </span>
          ))}
        </span>
      </p>
    </section>
  );
}
