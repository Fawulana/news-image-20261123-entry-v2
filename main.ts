// news-image-20261123 entry (Node 22, standard library only, offline, deterministic).
// The front page image is the entry.jpg beside this file: a newspaper front page
// for Monday 23 November 2026, built in this session from verified news of the
// day (COP31 collapses with no deal in Antalya; Iran strikes US bases in Bahrain;
// a Russian drone hits flats in Kyiv, 14 missing; Democrats win the US House).
// The program copies that image to /output/entry.png, byte for byte, every run.
// The file is a JPEG by its first bytes (the gate tells PNG and JPEG apart by
// content); its name stays entry.png either way, as the rules require.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.jpg', import.meta.url);
const target = join(outputDir, 'entry.png');

copyFileSync(source, target);
