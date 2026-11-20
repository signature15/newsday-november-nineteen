/**
 * One Day in World News - the entry for make.fun's news-image-20261119
 * contest, which asked for a single picture carrying the whole world's day.
 *
 * What the picture is: entry.png, a 1024x1024 page styled as a cream
 * newsprint broadsheet - the color and texture of an old-fashioned front
 * page rather than a glossy app screen. Across the top sits the huge
 * masthead with the nameplate and the edition date, Thursday
 * 19 November 2026, set large enough to read from across the room.
 *
 * Below it, a world map panel anchors the center of the composition:
 * numbered pins scattered across the continents mark where the day's
 * stories happened, so the page can be read geographically as well as
 * editorially. Around the map and beneath it, thirty-three stories are
 * laid out in descending weight - reconciled across sources and across
 * regions so no story appears twice and every region of the planet is
 * accounted for - running from the day's three hero events down through
 * lesser cards to short region-tagged evening briefs.
 *
 * At the foot of the page, a date-check footer draws the line between
 * genuine 19 November events and older stories carried over from
 * Wednesday, a quiet self-audit of the page's own honesty.
 *
 * What the program does: nothing clever. By the time main.ts runs, the
 * poster is finished; this file simply copies entry.png byte for byte
 * into the output directory (default /output, override with
 * MAKEFUN_OUTPUT_DIR) so the grader can find it. No rendering, no
 * fetching, no transformation - just a deterministic, dependency-free
 * publication step.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
