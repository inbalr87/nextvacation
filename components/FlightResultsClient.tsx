'use client';

import { useMemo, useState } from 'react';
import { flights } from '@/lib/data';
import { ProviderButton } from './ProviderButton';
import {
  SlidersHorizontal,
  X,
  BaggageClaim,
  Clock,
  PlaneTakeoff,
} from 'lucide-react';

type Sort = 'cheap' | 'fast' | 'recommended';

const mins = (n: number) =>
  `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;

export function FlightResultsClient({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const [sort, setSort] = useState<Sort>('cheap');
  const [direct, setDirect] = useState(false);
  const [airlines, setAirlines] = useState<string[]>([]);
  const [max, setMax] = useState(900);
  const [mobile, setMobile] = useState(false);

  const airlineList = [...new Set(flights.map((f) => f.airline))];

  const shown = useMemo(() => {
    const filtered = flights.filter(
      (f) =>
        (!direct || f.direct) &&
        (!airlines.length || airlines.includes(f.airline)) &&
        f.price <= max
    );

    return [...filtered].sort((x, y) =>
      sort === 'cheap'
        ? x.price - y.price
        : sort === 'fast'
          ? x.durationMins - y.durationMins
          : y.score - x.score
    );
  }, [sort, direct, airlines, max]);

  const toggle = (airline: string) => {
    setAirlines((current) =>
      current.includes(airline)
        ? current.filter((item) => item !== airline)
        : [...current, airline]
    );
  };

  const filters = (
    <>
      <div className="filter-head">
        <h3>סינון תוצאות</h3>

        <button
          className="clear-filters"
          onClick={() => {
            setDirect(false);
            setAirlines([]);
            setMax(900);
          }}
        >
          ניקוי
        </button>
      </div>

      <div className="filter-group">
        <strong>עצירות</strong>

        <label className="filter-option">
          <input
            type="checkbox"
            checked={direct}
            onChange={(e) => setDirect(e.target.checked)}
          />
          טיסות ישירות בלבד
        </label>
      </div>

      <div className="filter-group">
        <strong>חברות תעופה</strong>

        {airlineList.map((airline) => (
          <label className="filter-option" key={airline}>
            <input
              type="checkbox"
              checked={airlines.includes(airline)}
              onChange={() => toggle(airline)}
            />
            {airline}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <strong>
          מחיר מקסימלי <span>₪{max}</span>
        </strong>

        <input
          className="range"
          type="range"
          min="450"
          max="900"
          step="25"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />

        <div className="range-labels">
          <span>₪450</span>
          <span>₪900</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="results-layout">
      <aside className="filters">{filters}</aside>

      <div className="results-column">
        <div className="result-topbar">
          <div>
            <h2>{shown.length} אפשרויות להשוואה</h2>
            <span className="result-sub">
              מחירי הדגמה לאדם, הלוך ושוב
            </span>
          </div>

          <div className="topbar-actions">
            <button
              className="mobile-filter"
              onClick={() => setMobile(true)}
            >
              <SlidersHorizontal size={17} />
              סינון
            </button>

            <div className="sort-pills">
              <button
                className={
                  sort === 'cheap' ? 'sort-pill active' : 'sort-pill'
                }
                onClick={() => setSort('cheap')}
              >
                הכי זול
              </button>

              <button
                className={
                  sort === 'fast' ? 'sort-pill active' : 'sort-pill'
                }
                onClick={() => setSort('fast')}
              >
                הכי מהיר
              </button>

              <button
                className={
                  sort === 'recommended'
                    ? 'sort-pill active'
                    : 'sort-pill'
                }
                onClick={() => setSort('recommended')}
              >
                מומלץ
              </button>
            </div>
          </div>
        </div>

        <div className="results-list">
          {shown.map((flight) => (
            <article key={flight.id} className="flight-card">
              <div className="flight-main">
                <div className="airline">
                  <div
                    className="airline-logo"
                    style={{
                      borderColor: flight.airlineColor,
                      color: flight.airlineColor,
                    }}
                  >
                    {flight.code}
                  </div>

                  <div>
                    <strong>{flight.airline}</strong>
                    <span>
                      {flight.direct
                        ? 'ישירה'
                        : `עצירה ב${flight.via}`}
                    </span>
                  </div>
                </div>

                <Route
                  fromTime={flight.depart}
                  toTime={flight.arrive}
                  from={from}
                  to={to}
                  duration={flight.durationMins}
                  direct={flight.direct}
                  via={flight.via}
                />

                <div className="offer">
                  <small>החל מ־</small>
                  <strong>₪{flight.price}</strong>

                  <ProviderButton provider={flight.provider} />

                  <div className="external-note">
                    ההזמנה והתשלום באתר הספק
                  </div>
                </div>
              </div>

              <div className="flight-return">
                <div className="airline return-label">
                  <PlaneTakeoff size={18} />

                  <div>
                    <strong>חזור</strong>
                    <span>{flight.returnDepart}</span>
                  </div>
                </div>

                <Route
                  fromTime={flight.returnDepart}
                  toTime={flight.returnArrive}
                  from={to}
                  to={from}
                  duration={flight.returnDurationMins}
                  direct={flight.direct}
                  via={flight.via}
                />

                <div className="flight-perks">
                  <span>
                    <BaggageClaim size={15} />
                    {flight.baggage}
                  </span>

                  <span>
                    <Clock size={15} />
                    מחיר לדוגמה
                  </span>
                </div>
              </div>
            </article>
          ))}

          {!shown.length && (
            <div className="empty-results">
              <h3>לא מצאנו תוצאות עם הסינון הזה</h3>
              <p>
                נסו להעלות את המחיר המקסימלי או להסיר חלק
                מהפילטרים.
              </p>
            </div>
          )}
        </div>

        <div className="demo-data-note">
          <strong>נתוני הדגמה.</strong> לאחר חיבור API יוצגו כאן
          זמינות ומחירים חיים מהספקים המחוברים.
        </div>
      </div>

      {mobile && (
        <div
          className="mobile-filter-backdrop"
          onClick={() => setMobile(false)}
        >
          <aside
            className="mobile-filter-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mobile-filter-close"
              onClick={() => setMobile(false)}
              aria-label="סגירת סינון"
            >
              <X />
            </button>

            {filters}

            <button
              className="apply-filter"
              onClick={() => setMobile(false)}
            >
              הצגת {shown.length} תוצאות
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

function Route({
  fromTime,
  toTime,
  from,
  to,
  duration,
  direct,
  via,
}: {
  fromTime: string;
  toTime: string;
  from: string;
  to: string;
  duration: number;
  direct: boolean;
  via?: string;
}) {
  return (
    <div className="flight-route">
      <div>
        <div className="airport-time">{fromTime}</div>
        <div className="airport-code">{from}</div>
      </div>

      <div className="route-line">
        <span>{mins(duration)} שעות</span>

        <div className="line">
          <PlaneTakeoff size={14} />
        </div>

        <span>{direct ? 'ישירה' : `עצירה · ${via}`}</span>
      </div>

      <div>
        <div className="airport-time">{toTime}</div>
        <div className="airport-code">{to}</div>
      </div>
    </div>
  );
}
