/**
 * sermons.js — Sermon data, search, filter & YouTube player
 *
 * Changes from v1:
 *   - MP3 audio replaced with YouTube video links
 *   - Search by title, speaker, scripture
 *   - Filter by speaker and year
 *   - YouTube modal overlay player
 *
 * ── HOW TO ADD YOUR YOUTUBE LINKS ────────────────────────────
 * Find the sermon entry below and replace:
 *   youtube: null
 * with:
 *   youtube: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
 *
 * Supports both formats:
 *   https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   https://youtu.be/XXXXXXXXXXX
 * ─────────────────────────────────────────────────────────────
 */


/* ── 1. SERMON DATA ──────────────────────────────────────────── */

const SERMONS = [
  {
    zh:         '在沈默中引導的上帝',
    en:         'God Who Guides in Silence',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-08-23',
    ref:        '創世記 / Gen 24:1–33, 50–61',
    desc_zh:    '當上帝沈默時，祂仍在引導。透過亞伯拉罕僕人的旅程，看見上帝在靜默中的帶領。',
    desc_en:    "When God is silent, He is still guiding. Through Abraham's servant's journey, we see God's leadership in stillness.",
    youtube:    'https://youtu.be/S7L1oVZ8jNQ'
  },
  {
    zh:         '更像耶穌之路',
    en:         'The Path to Becoming More Like Jesus',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-08-09',
    ref:        '腓立比書 / Phil 3:7–14',
    desc_zh:    '保羅捨棄一切追求基督的心志，如何成為我們效法的榜樣。',
    desc_en:    "Paul's single-minded pursuit of Christ — giving up everything — becomes our model for transformation.",
    youtube:    'https://www.youtube.com/watch?v=LQHZGuzYOBM'
  },
  {
    zh:         '當上帝要的不是剩下的',
    en:         'When God Wants More Than the Leftovers',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-08-02',
    ref:        '創世記 / Gen 22:1–14',
    desc_zh:    '亞伯拉罕獻以撒的故事揭示：上帝不要我們生命的剩餘，祂要的是全部。',
    desc_en:    "The story of Abraham and Isaac reveals that God doesn't want our leftovers — He calls for our all.",
    youtube:    'https://www.youtube.com/watch?v=6fy9C-MCNVY'
  },
  {
    zh:         '卸下重擔：在憂慮中信靠神',
    en:         'Unburdened: Trusting God with Your Worries',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-07-26',
    ref:        '腓立比書 / Phil 4:6–7',
    desc_zh:    '聖經怎麼說憂慮？如何在禱告中將重擔交給上帝，得著超越理解的平安。',
    desc_en:    "What does Scripture say about worry? How to surrender burdens through prayer and receive peace beyond understanding.",
    youtube:    'https://www.youtube.com/watch?v=9xVXO2X6_LA'
  },
  {
    zh:         '如何進入神命定的福？',
    en:         'How to Enter the Blessing God Destined for You',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-07-12',
    ref:        '創世記 / Gen 15:1–6',
    desc_zh:    '上帝對亞伯拉罕的應許，是進入神命定之福的鑰匙。信心、等候與順服。',
    desc_en:    "God's promise to Abraham holds the key to entering His destined blessing. Faith, waiting, and obedience.",
    youtube:    'https://www.youtube.com/watch?v=Ix4Lbt1YUYA'
  },
  {
    zh:         '上主豈有難成的事？',
    en:         'Is Anything Too Hard for the Lord?',
    speaker:    '郭毓安牧師',
    speaker_en: 'Pastor Andy Guo',
    date:       '2026-07-05',
    ref:        '創世記 / Gen 18:1–15, 21:5–6',
    desc_zh:    '透過亞伯拉罕與撒拉的故事，探索上帝恩典與應許的奧秘。',
    desc_en:    "Through the story of Abraham and Sarah, we explore the mystery of God's unfailing grace and promise.",
    youtube:    'https://www.youtube.com/watch?v=r52-CCoQCv4'
  },
  {
    zh:         '作無瑕的工人',
    en:         'An Approved Worker',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-06-28',
    ref:        '使徒行傳 / Acts 6:1–7',
    desc_zh:    '教會如何在服事中建立健全的工人，榮耀主名。',
    desc_en:    'How the church builds faithful workers in ministry, to the glory of God.',
    youtube:    null
  },
  {
    zh:         '父親節反思：屬靈親子關係',
    en:         "Spiritual Parenting: Father's Day Reflection",
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-06-21',
    ref:        '哥林多前書 / 1 Cor 4:14–21',
    desc_zh:    '從保羅對哥林多教會的父愛，反思信仰中的屬靈親子關係。',
    desc_en:    "Reflecting on spiritual parenting through Paul's fatherly love for the Corinthian church.",
    youtube:    null
  },
  {
    zh:         '當人無法理解神念高度的時候',
    en:         "When We Cannot Comprehend God's Ways",
    speaker:    '林冬娟',
    speaker_en: 'Ruth Lin',
    date:       '2026-06-14',
    ref:        '以賽亞書 / Isa 55:8–9',
    desc_zh:    '面對人生的困惑與不解，如何在信仰中找到安息。',
    desc_en:    'Finding rest in faith when life brings confusion and unanswered questions.',
    youtube:    null
  },
  {
    zh:         '順服屬靈權柄',
    en:         'Obeying Spiritual Authority',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-06-07',
    ref:        '哥林多後書 / 2 Cor 10:8; 12:5–13',
    desc_zh:    '聖經如何教導我們在教會中順服與尊重屬靈的權柄。',
    desc_en:    'How Scripture teaches us to honour and submit to spiritual authority in the church.',
    youtube:    null
  },
  {
    zh:         '你習慣跟誰的？',
    en:         'Whose Guidance Do You Follow?',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-05-31',
    ref:        '羅馬書 / Rom 8:1–8, 12–14',
    desc_zh:    '在生命的每個選擇中，我們是跟隨肉體的衝動，還是聖靈的引導？',
    desc_en:    'In every choice of life, do we follow the impulse of the flesh or the leading of the Spirit?',
    youtube:    null
  },
  {
    zh:         '如何經歷聖靈中的盼望',
    en:         'Experiencing Hope in the Holy Spirit',
    speaker:    '白恩拾牧師',
    speaker_en: 'Pastor Victor Pai',
    date:       '2026-05-24',
    ref:        '羅馬書 / Rom 15:12–13',
    desc_zh:    '聖靈如何在我們生命中澆灌盼望，使我們在等待中喜樂。',
    desc_en:    'How the Holy Spirit pours hope into our lives, enabling us to rejoice even while waiting.',
    youtube:    null
  },
];


/* ── 2. HELPERS ──────────────────────────────────────────────── */

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00');
  if (lang === 'en') {
    return d.toLocaleDateString('en-CA', { year:'numeric', month:'short', day:'numeric' });
  }
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
}

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function getLang() {
  return document.body.classList.contains('lang-en') ? 'en' : 'zh';
}


/* ── 3. YOUTUBE MODAL ────────────────────────────────────────── */

function ensureModal() {
  if (document.getElementById('yt-modal')) return;

  const style = document.createElement('style');
  style.textContent = `
    #yt-modal {
      display: none;
      position: fixed; inset: 0; z-index: 9999;
      align-items: center; justify-content: center;
    }
    #yt-modal.open { display: flex; }
    #yt-backdrop {
      position: absolute; inset: 0;
      background: rgba(18,16,12,0.88);
      backdrop-filter: blur(6px);
      cursor: pointer;
    }
    #yt-container {
      position: relative; z-index: 1;
      width: 90vw; max-width: 880px;
      background: #1E1D1B;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.5);
    }
    #yt-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    #yt-sermon-title {
      font-family: 'Noto Serif TC', serif;
      font-size: 15px; font-weight: 500;
      color: rgba(255,255,255,0.88);
      max-width: calc(100% - 48px);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .lang-en #yt-sermon-title { font-family: 'Playfair Display', serif; }
    #yt-close {
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.70);
      font-size: 14px; line-height: 1;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; border: none; flex-shrink: 0;
      transition: background 0.2s;
    }
    #yt-close:hover { background: rgba(255,255,255,0.20); }
    #yt-iframe-wrap {
      position: relative; width: 100%; padding-top: 56.25%;
    }
    #yt-iframe {
      position: absolute; inset: 0;
      width: 100%; height: 100%; border: none;
    }
    #yt-unavailable {
      padding: 48px 32px;
      text-align: center;
      font-family: 'Noto Serif TC', serif;
      font-size: 15px; color: rgba(255,255,255,0.60); line-height: 1.8;
    }
    .lang-en #yt-unavailable { font-family: 'Inter', sans-serif; }
    #yt-yt-link {
      display: inline-flex; align-items: center; gap: 8px;
      margin-top: 20px; padding: 10px 24px;
      border-radius: 24px; background: #C8902A;
      color: white; font-family: 'Inter', sans-serif;
      font-size: 13px; font-weight: 500; text-decoration: none;
      transition: opacity 0.2s;
    }
    #yt-yt-link:hover { opacity: 0.85; }
  `;
  document.head.appendChild(style);

  const modal = document.createElement('div');
  modal.id = 'yt-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Sermon video');
  modal.innerHTML = `
    <div id="yt-backdrop"></div>
    <div id="yt-container">
      <div id="yt-header">
        <div id="yt-sermon-title"></div>
        <button id="yt-close" aria-label="Close">✕</button>
      </div>
      <div id="yt-iframe-wrap">
        <iframe id="yt-iframe" src="" frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen title="Sermon video">
        </iframe>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('yt-backdrop').addEventListener('click', closeYTModal);
  document.getElementById('yt-close').addEventListener('click', closeYTModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeYTModal(); });
}

function openSermon(index) {
  const sermon = SERMONS[index];
  const lang   = getLang();
  const ytId   = getYouTubeId(sermon.youtube);

  ensureModal();

  const modal       = document.getElementById('yt-modal');
  const iframe      = document.getElementById('yt-iframe');
  const iframeWrap  = document.getElementById('yt-iframe-wrap');
  const titleEl     = document.getElementById('yt-sermon-title');

  titleEl.textContent = lang === 'en' ? sermon.en : sermon.zh;

  // Remove any old "unavailable" message
  const oldMsg = document.getElementById('yt-unavailable');
  if (oldMsg) oldMsg.remove();

  if (ytId) {
    iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
    iframeWrap.style.display = 'block';
  } else {
    iframe.src = '';
    iframeWrap.style.display = 'none';

    const msg = document.createElement('div');
    msg.id = 'yt-unavailable';
    const ytChannelUrl = 'https://www.youtube.com/@antiochchurch4769';

    msg.innerHTML = lang === 'en'
      ? `<div style="font-size:32px;margin-bottom:16px">🎬</div>
         <p>This sermon recording will be available on YouTube soon.</p>
         <a id="yt-yt-link" href="${ytChannelUrl}" target="_blank">
           Visit our YouTube channel →
         </a>`
      : `<div style="font-size:32px;margin-bottom:16px">🎬</div>
         <p>此講道錄影即將在 YouTube 上架，請耐心等候。</p>
         <a id="yt-yt-link" href="${ytChannelUrl}" target="_blank">
           前往我們的 YouTube 頻道 →
         </a>`;

    document.getElementById('yt-container').appendChild(msg);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeYTModal() {
  const modal = document.getElementById('yt-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.getElementById('yt-iframe').src = '';
  document.body.style.overflow = '';
}


/* ── 4. FILTER STATE ─────────────────────────────────────────── */

const filterState = { query:'', speaker:'', year:'' };

function getFilteredSermons() {
  const q = filterState.query.trim().toLowerCase();
  return SERMONS
    .map((s, i) => ({ ...s, _index: i }))
    .filter(s => {
      if (q) {
        const hay = [s.zh, s.en, s.speaker, s.speaker_en, s.ref].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filterState.speaker && s.speaker !== filterState.speaker) return false;
      if (filterState.year   && !s.date.startsWith(filterState.year)) return false;
      return true;
    });
}

function getSpeakers() {
  const lang = getLang();
  const seen = new Set();
  const list = [];
  SERMONS.forEach(s => {
    if (!seen.has(s.speaker)) {
      seen.add(s.speaker);
      list.push({ zh: s.speaker, en: s.speaker_en });
    }
  });
  return list;
}

function getYears() {
  const seen = new Set();
  SERMONS.forEach(s => seen.add(s.date.slice(0, 4)));
  return [...seen].sort().reverse();
}


/* ── 5. RENDER SERMON LIST ───────────────────────────────────── */

function buildSermonList(container, limit, skipFirst, useFilter) {
  limit     = limit     || 0;
  skipFirst = skipFirst || 0;
  useFilter = useFilter || false;

  if (!container) return;

  const lang = getLang();
  const isEn = lang === 'en';

  let sermons;
  if (useFilter) {
    sermons = getFilteredSermons();
  } else {
    sermons = SERMONS.slice(skipFirst).map((s, i) => ({ ...s, _index: i + skipFirst }));
  }
  if (limit) sermons = sermons.slice(0, limit);

  container.innerHTML = '';

  if (sermons.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:60px 24px;color:var(--light);font-family:'Inter',sans-serif">
        <div style="font-size:36px;margin-bottom:14px">🔍</div>
        <div style="font-size:14px;line-height:1.7">
          ${isEn
            ? 'No sermons found.<br>Try different keywords or clear the filters.'
            : '找不到符合的講道。<br>請嘗試其他關鍵字，或清除篩選條件。'}
        </div>
      </div>`;
    return;
  }

  sermons.forEach(sermon => {
    const idx     = sermon._index;
    const hasLink = !!sermon.youtube;
    const row     = document.createElement('div');
    row.className = 'sermon-row';
    row.setAttribute('data-sermon-index', idx);

    row.innerHTML = `
      <button class="sermon-play-btn${hasLink ? '' : ' sermon-soon'}"
        aria-label="${isEn ? (hasLink ? 'Watch sermon' : 'Coming soon') : (hasLink ? '觀看講道' : '即將上線')}"
        title="${isEn ? (hasLink ? 'Watch on YouTube' : 'Video coming soon') : (hasLink ? '在 YouTube 上觀看' : '視頻即將上線')}">
        ${hasLink
          ? `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M8 5v14l11-7z"/></svg>`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
               <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
             </svg>`}
      </button>
      <div class="sermon-row-body">
        <div class="sermon-row-title">${isEn ? sermon.en : sermon.zh}</div>
        <div class="sermon-row-meta">
          ${isEn ? sermon.speaker_en : sermon.speaker}
          &nbsp;·&nbsp;
          ${formatDate(sermon.date, lang)}
          ${!hasLink ? `&nbsp;·&nbsp;<span class="sermon-soon-label">${isEn ? 'Coming soon' : '即將上線'}</span>` : ''}
        </div>
      </div>
      <div class="scripture-badge">${sermon.ref}</div>
      ${hasLink
        ? `<svg class="sermon-yt-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
             <path d="M23.8 7.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1.1C17.2 3.5 12 3.5 12 3.5s-5.2 0-8.4.2c-.5.1-1.5.1-2.4 1.1-.7.7-1 2.4-1 2.4S0 9.1 0 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1C5.6 20.2 12 20.2 12 20.2s5.2 0 8.4-.3c.5-.1 1.5-.1 2.4-1.1.7-.7 1-2.4 1-2.4s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z"/>
           </svg>`
        : ''}
    `;

    row.addEventListener('click', () => openSermon(idx));
    row.style.cursor = 'pointer';
    container.appendChild(row);
  });
}


/* ── 6. SEARCH BAR (sermons page) ────────────────────────────── */

function initSermonSearch(searchContainerId, listContainerId) {
  const searchContainer = document.getElementById(searchContainerId);
  const listContainer   = document.getElementById(listContainerId);
  if (!searchContainer || !listContainer) return;

  const isEn = getLang() === 'en';

  const speakerOptions = getSpeakers()
    .map(s => `<option value="${s.zh}">${isEn ? s.en : s.zh}</option>`)
    .join('');

  const yearOptions = getYears()
    .map(y => `<option value="${y}">${y}</option>`)
    .join('');

  searchContainer.innerHTML = `
    <div class="ssb">
      <div class="ssb-field">
        <svg class="ssb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="search" id="ssb-input" autocomplete="off"
          placeholder="${isEn ? 'Search title, speaker, scripture…' : '搜尋標題、講員或經文…'}"
          aria-label="${isEn ? 'Search sermons' : '搜尋講道'}"/>
        <button id="ssb-clear-input" class="ssb-clear" aria-label="Clear" style="display:none">✕</button>
      </div>
      <select id="ssb-speaker" class="ssb-select" aria-label="${isEn ? 'Speaker' : '講員'}">
        <option value="">${isEn ? 'All Speakers' : '所有講員'}</option>
        ${speakerOptions}
      </select>
      <select id="ssb-year" class="ssb-select" aria-label="${isEn ? 'Year' : '年份'}">
        <option value="">${isEn ? 'All Years' : '所有年份'}</option>
        ${yearOptions}
      </select>
      <div id="ssb-count" class="ssb-count"></div>
      <button id="ssb-clear-all" class="ssb-clear-all" style="display:none">
        ${isEn ? '✕ Clear' : '✕ 清除'}
      </button>
    </div>
  `;

  const input    = document.getElementById('ssb-input');
  const clearIn  = document.getElementById('ssb-clear-input');
  const clearAll = document.getElementById('ssb-clear-all');
  const speaker  = document.getElementById('ssb-speaker');
  const year     = document.getElementById('ssb-year');
  const count    = document.getElementById('ssb-count');

  function render() {
    filterState.query   = input.value;
    filterState.speaker = speaker.value;
    filterState.year    = year.value;

    const hasActive = filterState.query || filterState.speaker || filterState.year;
    clearIn.style.display  = filterState.query ? 'flex' : 'none';
    clearAll.style.display = hasActive ? 'inline-flex' : 'none';

    buildSermonList(listContainer, 0, 0, true);

    const n  = getFilteredSermons().length;
    const en = getLang() === 'en';
    count.textContent = en ? `${n} sermon${n !== 1 ? 's' : ''}` : `${n} 篇講道`;
  }

  input.addEventListener('input', render);
  speaker.addEventListener('change', render);
  year.addEventListener('change', render);

  clearIn.addEventListener('click', () => { input.value = ''; render(); input.focus(); });
  clearAll.addEventListener('click', () => {
    input.value = speaker.value = year.value = '';
    filterState.query = filterState.speaker = filterState.year = '';
    render();
  });

  render(); // initial render
}


/* ── 7. RE-RENDER ON LANGUAGE SWITCH ────────────────────────── */

function rerenderAllSermonLists() {
  document.querySelectorAll('[data-sermon-container]').forEach(el => {
    buildSermonList(
      el,
      parseInt(el.dataset.limit    || '0'),
      parseInt(el.dataset.skip     || '0'),
      el.dataset.filtered === 'true'
    );
  });
  if (document.getElementById('sermon-search-bar')) {
    initSermonSearch('sermon-search-bar', 'full-sermon-list');
  }
}
