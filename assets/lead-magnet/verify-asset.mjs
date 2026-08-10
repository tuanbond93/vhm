import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.md');
const htmlPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.html');
const pdfPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.pdf');

console.log('=== VERIFYING LEAD MAGNET ASSET DELIVERABLES ===');

if (!fs.existsSync(mdPath)) {
  console.error('FAIL: Markdown file missing!');
  process.exit(1);
}

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: HTML file missing!');
  process.exit(1);
}

if (!fs.existsSync(pdfPath)) {
  console.error('FAIL: PDF file missing!');
  process.exit(1);
}

const mdStats = fs.statSync(mdPath);
const htmlStats = fs.statSync(htmlPath);
const pdfStats = fs.statSync(pdfPath);

console.log(`Markdown File: ${mdPath} (${mdStats.size} bytes)`);
console.log(`HTML File: ${htmlPath} (${htmlStats.size} bytes)`);
console.log(`PDF File: ${pdfPath} (${pdfStats.size} bytes)`);

const md = fs.readFileSync(mdPath, 'utf8');

// Count Modules
const modules = md.match(/## MODULE \d — /g) || [];
console.log(`Module Count: ${modules.length} / 8`);

// Count Prompts
const prompts = md.match(/### Prompt \d+ — /g) || [];
console.log(`Prompt Count: ${prompts.length} / 32`);

// Count Human Checks
const humanChecks = md.match(/\* \*\*Human Check:\*\*/g) || [];
console.log(`Human Check Count: ${humanChecks.length} / 32`);

// Verify no placeholders like TODO, TBD, Lorem ipsum
const placeholders = md.match(/(TODO|TBD|Lorem ipsum|placeholder)/gi) || [];
console.log(`Placeholder check: ${placeholders.length === 0 ? 'PASS (0 placeholders found)' : 'FAIL (' + placeholders.length + ' found)'}`);

if (modules.length === 8 && prompts.length === 32 && humanChecks.length === 32 && placeholders.length === 0) {
  console.log('=== ALL CONTENT CHECKS PASSED ===');
} else {
  console.error('=== CONTENT CHECK FAILURE ===');
  process.exit(1);
}
