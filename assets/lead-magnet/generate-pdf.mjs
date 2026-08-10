import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.md');
const htmlPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.html');
const pdfPath = path.join(__dirname, 'van-hanh-moi-ai-prompt-kit-ops-v1.pdf');

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Helper to extract prompts from Markdown
function parsePrompts(md) {
  const modules = [];
  const moduleRegex = /## (MODULE \d — [^\n]+)\n([\s\S]*?)(?=(## MODULE \d|## TỪ PROMPT|$))/g;
  let moduleMatch;

  while ((moduleMatch = moduleRegex.exec(md)) !== null) {
    const moduleTitle = moduleMatch[1].trim();
    const moduleContent = moduleMatch[2];

    const prompts = [];
    const promptRegex = /### (Prompt \d+ — [^\n]+)\n([\s\S]*?)(?=(### Prompt \d+|$))/g;
    let promptMatch;

    while ((promptMatch = promptRegex.exec(moduleContent)) !== null) {
      const promptHeader = promptMatch[1].trim();
      const promptBody = promptMatch[2];

      const goalMatch = promptBody.match(/\* \*\*Mục tiêu:\*\* ([^\n]+)/);
      const whenMatch = promptBody.match(/\* \*\*Khi dùng:\*\* ([^\n]+)/);
      const inputMatch = promptBody.match(/\* \*\*Input:\*\* ([^\n]+)/);
      const codeMatch = promptBody.match(/```text\n([\s\S]*?)\n```/);
      const outputMatch = promptBody.match(/\* \*\*Output mong đợi:\*\* ([^\n]+)/);
      const humanCheckMatch = promptBody.match(/\* \*\*Human Check:\*\* ([^\n]+)/);

      prompts.push({
        header: promptHeader,
        goal: goalMatch ? goalMatch[1].trim() : '',
        when: whenMatch ? whenMatch[1].trim() : '',
        input: inputMatch ? inputMatch[1].trim() : '',
        promptText: codeMatch ? codeMatch[1].trim() : '',
        output: outputMatch ? outputMatch[1].trim() : '',
        humanCheck: humanCheckMatch ? humanCheckMatch[1].trim() : '',
      });
    }

    modules.push({
      title: moduleTitle,
      prompts,
    });
  }

  return modules;
}

const parsedModules = parsePrompts(mdContent);

// Build HTML content with Operations Intelligence styling
const htmlTemplate = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>AI Prompt Kit cho Operation Manager — V1 | Vận Hành Mới</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 16mm 14mm 16mm 14mm;
    }

    :root {
      --color-paper: #F7F8F5;
      --color-surface: #FFFFFF;
      --color-ink: #14202B;
      --color-body: #435164;
      --color-muted: #667085;
      --color-brand: #235789;
      --color-action: #2F6FED;
      --color-success: #167A65;
      --color-attention: #C47A16;
      --color-risk: #B5473C;
      --color-border: #DCE2E7;
      --font-heading: 'Be Vietnam Pro', system-ui, sans-serif;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      font-family: var(--font-sans);
      color: var(--color-body);
      background-color: #FFFFFF;
      margin: 0;
      padding: 0;
      font-size: 10pt;
      line-height: 1.5;
    }

    h1, h2, h3, h4 {
      font-family: var(--font-heading);
      color: var(--color-ink);
      margin-top: 0;
      letter-spacing: -0.015em;
    }

    /* Page Breaks */
    .page-break {
      page-break-before: always;
    }

    .avoid-break {
      page-break-inside: avoid;
    }

    /* COVER PAGE */
    .cover-page {
      height: 250mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20mm 10mm;
      border: 1px solid var(--color-border);
      border-radius: 16px;
      background: linear-gradient(180deg, #FFFFFF 0%, #F7F8F5 100%);
      margin-bottom: 20px;
    }

    .cover-badge {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 9pt;
      font-weight: 600;
      color: var(--color-brand);
      background: #EBF2FE;
      border: 1px solid #C5D8F9;
      padding: 4px 12px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 20px;
    }

    .cover-title {
      font-size: 32pt;
      font-weight: 800;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 12px;
    }

    .cover-subtitle {
      font-size: 16pt;
      font-weight: 600;
      color: var(--color-action);
      margin-bottom: 24px;
    }

    .cover-desc {
      font-size: 11pt;
      color: var(--color-body);
      max-width: 480px;
      line-height: 1.6;
    }

    .cover-footer {
      border-top: 1px solid var(--color-border);
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9pt;
      color: var(--color-muted);
      font-family: var(--font-mono);
    }

    /* SECTION STYLES */
    .section-box {
      background: var(--color-paper);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 14pt;
      font-weight: 700;
      color: var(--color-ink);
      border-bottom: 2px solid var(--color-brand);
      padding-bottom: 6px;
      margin-bottom: 14px;
    }

    /* MODULE HEADER */
    .module-header {
      background: var(--color-ink);
      color: #FFFFFF;
      padding: 14px 20px;
      border-radius: 10px;
      margin-top: 24px;
      margin-bottom: 16px;
      font-family: var(--font-heading);
      font-size: 13pt;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    /* PROMPT CARD */
    .prompt-card {
      background: #FFFFFF;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 16px 18px;
      margin-bottom: 18px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }

    .prompt-title {
      font-size: 12pt;
      font-weight: 700;
      color: var(--color-brand);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .prompt-meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      background: var(--color-paper);
      padding: 10px 12px;
      border-radius: 8px;
      font-size: 9pt;
      margin-bottom: 12px;
      border: 1px solid #E9EFF4;
    }

    .prompt-meta-item strong {
      color: var(--color-ink);
      display: block;
      font-size: 8pt;
      text-transform: uppercase;
      font-family: var(--font-mono);
      margin-bottom: 2px;
    }

    .prompt-box {
      background: #14202B;
      color: #F7F8F5;
      font-family: var(--font-mono);
      font-size: 8.5pt;
      line-height: 1.5;
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid #233547;
      white-space: pre-wrap;
      word-break: break-word;
      margin-bottom: 10px;
    }

    .prompt-output {
      font-size: 8.5pt;
      color: var(--color-body);
      margin-bottom: 8px;
      padding-left: 4px;
    }

    .prompt-output strong {
      color: var(--color-ink);
      font-family: var(--font-mono);
    }

    .human-check-box {
      background: #FEF5E7;
      border: 1px solid #F9E2C1;
      border-left: 4px solid var(--color-attention);
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 8.5pt;
      color: #7A4B0D;
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }

    .human-check-box strong {
      font-family: var(--font-mono);
      font-size: 8pt;
      text-transform: uppercase;
      color: var(--color-attention);
      shrink: 0;
    }

    /* TOC Table */
    .toc-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9pt;
    }

    .toc-table td {
      padding: 6px 8px;
      border-bottom: 1px solid var(--color-border);
    }

    .toc-table tr:hover {
      background: var(--color-paper);
    }

    .toc-module {
      font-weight: 700;
      color: var(--color-ink);
    }

    /* FOOTER / HEADER IN PDF */
    .pdf-footer {
      font-family: var(--font-mono);
      font-size: 8pt;
      color: var(--color-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid var(--color-border);
    }

    .nowrap {
      white-space: nowrap;
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div>
      <span class="cover-badge">VẬN HÀNH MỚI · TOOLKIT V1</span>
      <h1 class="cover-title">AI PROMPT KIT<br>CHO OPERATION MANAGER</h1>
      <div class="cover-subtitle">32 Prompt Thực Chiến cho Vận Hành, Dữ Liệu & AI</div>
      <p class="cover-desc">
        Bộ công cụ đóng gói sẵn dành riêng cho Operations Managers, Team Leaders và SMEs. 
        Ứng dụng AI trực tiếp vào phân tích tồn đọng, phát hiện bất thường SLA, chuẩn hóa SOP và lập báo cáo điều hành.
      </p>
    </div>

    <div>
      <div style="background: #FFFFFF; border: 1px solid var(--color-border); padding: 14px 18px; border-radius: 12px; font-size: 9pt; margin-bottom: 24px;">
        <strong style="color: var(--color-ink); font-family: var(--font-heading); display: block; margin-bottom: 4px;">ĐỊNH VỊ CỐT LÕI:</strong>
        <em>"Vận Hành Mới = Hệ thống + AI ứng dụng thực tế cho người làm vận hành."</em><br>
        AI hỗ trợ cấu trúc và phân tích — Con người chịu trách nhiệm kiểm chứng và ra quyết định.
      </div>

      <div class="cover-footer">
        <span>Vận Hành Mới · Operations · Data · AI</span>
        <span>vanhanhmoi.com</span>
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- TRUST NOTE & DATA SAFETY -->
  <div class="section-box avoid-break">
    <div class="section-title">1. NGUYÊN TẮC MINH BẠCH & AN TOÀN DỮ LIỆU</div>
    <p>Bộ Prompt Kit này không phải là "phép thuật" tự động thay thế quản lý. Đây là công cụ trợ lực giúp người làm vận hành chuẩn hóa cấu trúc suy nghĩ, trích xuất dữ liệu và rút ngắn thời gian làm việc thủ công.</p>
    
    <div style="background: #E8F5F2; border: 1px solid #BDE3DA; border-left: 4px solid var(--color-success); padding: 10px 14px; border-radius: 8px; font-size: 9pt; margin: 12px 0;">
      <strong style="color: var(--color-success); font-family: var(--font-mono); text-transform: uppercase;">AI có thể giúp:</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li>Cấu trúc hóa thông tin & sắp xếp backlog</li>
        <li>Phát hiện pattern bất thường trong dữ liệu</li>
        <li>Tổng hợp bằng chứng & tạo bản thảo báo cáo</li>
      </ul>
    </div>

    <div style="background: #FEF5E7; border: 1px solid #F9E2C1; border-left: 4px solid var(--color-attention); padding: 10px 14px; border-radius: 8px; font-size: 9pt; margin: 12px 0;">
      <strong style="color: var(--color-attention); font-family: var(--font-mono); text-transform: uppercase;">AI không được phép:</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li>Tự suy đoán/bịa đặt dữ liệu không có trong Input (Hallucination)</li>
        <li>Biến giả thuyết thành sự thật khi chưa có bằng chứng</li>
        <li>Ra quyết định thay thế quản lý hiện trường</li>
      </ul>
    </div>

    <div style="background: #FFFFFF; border: 1px solid var(--color-border); padding: 10px 14px; border-radius: 8px; font-size: 8.5pt; margin-top: 12px;">
      <strong style="color: var(--color-risk); font-family: var(--font-mono); text-transform: uppercase;">Quy tắc An toàn Dữ liệu (Data Safety):</strong><br>
      Trước khi dán dữ liệu vào AI công cộng (ChatGPT/Claude), hãy xóa hoặc thay thế các thông tin nhạy cảm: Số điện thoại, Email, Tên thật khách hàng, Mật khẩu, API Keys, Giá trị hợp đồng bảo mật.
    </div>

    <div class="pdf-footer">
      <span>Vận Hành Mới · AI Prompt Kit V1</span>
      <span>vanhanhmoi.com</span>
    </div>
  </div>

  <!-- QUICK START & TABLE OF CONTENTS -->
  <div class="section-box avoid-break">
    <div class="section-title">2. HƯỚNG DẪN SỬ DỤNG NHANH & MỤC LỤC</div>
    <ol style="margin: 0 0 16px 18px; padding: 0; font-size: 9pt; line-height: 1.6;">
      <li><strong>Chọn Prompt:</strong> Tra cứu mục lục 8 Module bên dưới.</li>
      <li><strong>Copy Prompt:</strong> Sao chép đoạn câu lệnh trong khung tối màu.</li>
      <li><strong>Điền Input:</strong> Dán dữ liệu vận hành thực tế đã làm sạch vào phần <code>[INPUT]</code>.</li>
      <li><strong>Chạy & Review:</strong> Nhập vào AI và đối chiếu kết quả với ô <strong>Human Check</strong>.</li>
    </ol>

    <div style="font-family: var(--font-heading); font-weight: 700; font-size: 11pt; color: var(--color-ink); margin-bottom: 8px;">MỤC LỤC 8 MODULE PROMPT THỰC CHIẾN</div>
    <table class="toc-table">
      ${parsedModules.map((m, idx) => `
        <tr>
          <td class="toc-module">Module ${idx + 1}</td>
          <td>${m.title.replace(/^MODULE \d — /, '')}</td>
          <td style="text-align: right; font-family: var(--font-mono); color: var(--color-muted);">4 Prompts</td>
        </tr>
      `).join('')}
    </table>

    <div class="pdf-footer">
      <span>Vận Hành Mới · AI Prompt Kit V1</span>
      <span>vanhanhmoi.com</span>
    </div>
  </div>

  <!-- MODULES & 32 PROMPTS -->
  ${parsedModules.map((moduleItem, mIdx) => `
    <div class="page-break"></div>
    <div class="module-header">${moduleItem.title}</div>
    
    ${moduleItem.prompts.map((p) => `
      <div class="prompt-card avoid-break">
        <div class="prompt-title">
          <span>${p.header}</span>
          <span style="font-family: var(--font-mono); font-size: 8pt; background: #EBF2FE; color: #235789; padding: 2px 8px; border-radius: 4px; border: 1px solid #C5D8F9;">V1</span>
        </div>

        <div class="prompt-meta-grid">
          <div class="prompt-meta-item">
            <strong>MỤC TIÊU:</strong>
            ${p.goal}
          </div>
          <div class="prompt-meta-item">
            <strong>KHI DÙNG:</strong>
            ${p.when}
          </div>
          <div class="prompt-meta-item" style="grid-column: span 2;">
            <strong>INPUT CẦN CHUẨN BỊ:</strong>
            ${p.input}
          </div>
        </div>

        <div class="prompt-box">${p.promptText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

        <div class="prompt-output">
          <strong>OUTPUT MONG ĐỢI:</strong> ${p.output}
        </div>

        <div class="human-check-box">
          <strong>HUMAN CHECK:</strong>
          <span>${p.humanCheck}</span>
        </div>
      </div>
    `).join('')}
    <div class="pdf-footer">
      <span>Vận Hành Mới · Module ${mIdx + 1}</span>
      <span>vanhanhmoi.com</span>
    </div>
  `).join('')}

  <!-- CLOSING SECTION -->
  <div class="page-break"></div>
  <div class="section-box avoid-break" style="margin-top: 30px;">
    <div class="section-title">TỪ PROMPT → AI-ASSISTED WORKFLOW</div>
    <p>Hệ thống hóa vận hành bằng AI là một hành trình tích lũy có phương pháp. Việc ứng dụng 32 Prompts trên là bước đầu tiên để chuẩn hóa nhịp quản trị.</p>

    <div style="background: #FFFFFF; border: 1px solid var(--color-border); padding: 14px; border-radius: 10px; text-align: center; margin: 16px 0; font-family: var(--font-mono); font-size: 8.5pt; color: var(--color-brand); line-height: 1.8;">
      Raw Data &rarr; Structured Input &rarr; AI Analysis &rarr; Human Review &rarr; Decision / Action &rarr; Evidence &rarr; <span class="nowrap">Follow-up</span>
    </div>

    <div style="text-align: center; padding-top: 10px;">
      <h3 style="font-size: 13pt; margin-bottom: 6px;">Khám phá thêm tài nguyên vận hành thực chiến</h3>
      <p style="font-size: 9.5pt; color: var(--color-muted); margin-bottom: 12px;">Website chính thức: <strong>https://vanhanhmoi.com</strong></p>
      <div style="font-family: var(--font-mono); font-size: 8.5pt; color: var(--color-body);">
        Vận Hành Mới — Hệ thống + AI ứng dụng thực tế cho người làm vận hành.
      </div>
    </div>
    
    <div class="pdf-footer">
      <span>Vận Hành Mới · AI Prompt Kit V1</span>
      <span>vanhanhmoi.com</span>
    </div>
  </div>

</body>
</html>`;

fs.writeFileSync(htmlPath, htmlTemplate, 'utf8');
console.log(`HTML rendered at: ${htmlPath}`);

// Render PDF using Edge headless CLI
const msedgePath = `C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe`;
const printCmd = `"${msedgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;

try {
  console.log('Running Edge Headless PDF Generation...');
  execSync(printCmd, { stdio: 'inherit' });
  console.log(`PDF successfully generated at: ${pdfPath}`);
} catch (err) {
  console.error('PDF Generation failed:', err);
  process.exit(1);
}
