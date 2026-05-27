const CertificateGenerator = {
  generate(canvas, type, recipientName, date, score) {
    const W = 1200, H = 840;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const isCompletion = type === 'completion';
    const accent = isCompletion ? '#00E5FF' : '#F59E0B';
    const accentRgb = isCompletion ? '0,229,255' : '245,158,11';

    // ── background
    ctx.fillStyle = '#08080e';
    ctx.fillRect(0, 0, W, H);

    // subtle grid
    ctx.strokeStyle = `rgba(${accentRgb},0.04)`;
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // outer border
    const bw = 3;
    ctx.strokeStyle = `rgba(${accentRgb},0.25)`;
    ctx.lineWidth = bw;
    CertificateGenerator._roundRect(ctx, bw/2, bw/2, W-bw, H-bw, 20);
    ctx.stroke();

    // inner border
    ctx.strokeStyle = `rgba(${accentRgb},0.1)`;
    ctx.lineWidth = 1;
    CertificateGenerator._roundRect(ctx, 28, 28, W-56, H-56, 14);
    ctx.stroke();

    // corner ornaments
    CertificateGenerator._corners(ctx, accent, 40, 40, W-40, H-40, 36);

    // top glow
    const grd = ctx.createRadialGradient(W/2, 0, 0, W/2, 0, 400);
    grd.addColorStop(0, `rgba(${accentRgb},0.12)`);
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // ── LOGO
    ctx.font = '700 15px Inter, sans-serif';
    ctx.fillStyle = accent;
    ctx.letterSpacing = '3px';
    ctx.textAlign = 'center';
    ctx.fillText('CIRCLE', W/2, 88);

    // divider line
    ctx.strokeStyle = `rgba(${accentRgb},0.3)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W/2 - 40, 98);
    ctx.lineTo(W/2 + 40, 98);
    ctx.stroke();

    // Certificate type
    ctx.font = '300 13px Inter, sans-serif';
    ctx.fillStyle = `rgba(255,255,255,0.35)`;
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF', W/2, 130);

    ctx.font = isCompletion ? '800 56px Inter, sans-serif' : '800 48px Inter, sans-serif';
    ctx.fillStyle = accent;
    ctx.letterSpacing = '-2px';
    const typeLabel = isCompletion ? 'COMPLETION' : 'MERIT';
    ctx.fillText(typeLabel, W/2, 195);

    // presented to
    ctx.font = '400 13px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.letterSpacing = '2px';
    ctx.fillText('PRESENTED TO', W/2, 248);

    // name
    ctx.font = '700 44px "Playfair Display", serif';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '-1px';
    ctx.fillText(recipientName || 'Circle Graduate', W/2, 308);

    // name underline
    const nameW = ctx.measureText(recipientName || 'Circle Graduate').width;
    ctx.strokeStyle = `rgba(${accentRgb},0.4)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W/2 - nameW/2, 318);
    ctx.lineTo(W/2 + nameW/2, 318);
    ctx.stroke();

    // description
    ctx.font = '400 15px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.letterSpacing = '0px';
    if (isCompletion) {
      ctx.fillText('has successfully completed all 30 levels across all 6 tiers of the', W/2, 360);
      ctx.fillText('Circle High-Frequency Trading & Quantitative Finance Curriculum', W/2, 383);
    } else {
      ctx.fillText(`has demonstrated expert-level mastery of the Circle curriculum`, W/2, 360);
      ctx.fillText(`achieving a score of ${score}% on the comprehensive Merit Examination`, W/2, 383);
    }

    // divider
    ctx.strokeStyle = `rgba(${accentRgb},0.15)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W/2 - 220, 415);
    ctx.lineTo(W/2 + 220, 415);
    ctx.stroke();

    // modules/tiers info
    if (isCompletion) {
      const tiers = ['BEGINNER','FOUNDATION','PRACTITIONER','ADVANCED','EXPERT','MASTER'];
      const tierW = 140, tierH = 52, startX = (W - (tiers.length * tierW + 10 * (tiers.length-1))) / 2;
      tiers.forEach((t, i) => {
        const x = startX + i * (tierW + 10);
        ctx.fillStyle = `rgba(${accentRgb},0.08)`;
        CertificateGenerator._roundRect(ctx, x, 432, tierW, tierH, 8);
        ctx.fill();
        ctx.strokeStyle = `rgba(${accentRgb},0.2)`;
        ctx.lineWidth = 1;
        CertificateGenerator._roundRect(ctx, x, 432, tierW, tierH, 8);
        ctx.stroke();
        ctx.font = '700 10px Inter, sans-serif';
        ctx.fillStyle = accent;
        ctx.letterSpacing = '1px';
        ctx.fillText(t, x + tierW/2, 456);
        ctx.font = '400 10px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.letterSpacing = '0px';
        ctx.fillText('5 LEVELS', x + tierW/2, 474);
      });
    } else {
      ctx.font = '800 52px Inter, sans-serif';
      ctx.fillStyle = accent;
      ctx.letterSpacing = '-2px';
      ctx.fillText(`${score}%`, W/2, 480);
      ctx.font = '400 13px Inter, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.letterSpacing = '2px';
      ctx.fillText(`MERIT EXAMINATION SCORE  ·  PASS THRESHOLD: 85%`, W/2, 506);
    }

    // bottom row
    const bottomY = 580;

    // issued date
    ctx.textAlign = 'left';
    ctx.font = '500 11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.letterSpacing = '1px';
    ctx.fillText('ISSUED', 96, bottomY);
    ctx.font = '600 14px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.letterSpacing = '0px';
    ctx.fillText(date, 96, bottomY + 18);

    // verifier
    ctx.textAlign = 'center';
    ctx.font = '500 11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.letterSpacing = '1px';
    ctx.fillText('VERIFIED BY', W/2, bottomY);
    ctx.font = '700 16px Inter, sans-serif';
    ctx.fillStyle = accent;
    ctx.letterSpacing = '-0.3px';
    ctx.fillText('CIRCLE', W/2, bottomY + 20);

    // cert ID
    ctx.textAlign = 'right';
    ctx.font = '500 11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.letterSpacing = '1px';
    ctx.fillText('CERTIFICATE ID', W - 96, bottomY);
    const certId = CertificateGenerator._genId(type, recipientName, date);
    ctx.font = '600 12px monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.letterSpacing = '0px';
    ctx.fillText(certId, W - 96, bottomY + 18);

    // seal
    CertificateGenerator._seal(ctx, W/2, H - 68, accent, accentRgb);

    return canvas;
  },

  _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  },

  _corners(ctx, color, x1, y1, x2, y2, size) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const corners = [[x1,y1,1,1],[x2,y1,-1,1],[x2,y2,-1,-1],[x1,y2,1,-1]];
    corners.forEach(([cx,cy,dx,dy]) => {
      ctx.beginPath();
      ctx.moveTo(cx + dx*size, cy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx, cy + dy*size);
      ctx.stroke();
    });
  },

  _seal(ctx, cx, cy, color, rgbStr) {
    // outer ring
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(${rgbStr},0.4)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // inner ring
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(${rgbStr},0.25)`;
    ctx.lineWidth = 1;
    ctx.stroke();

    // fill
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI*2);
    ctx.fillStyle = `rgba(${rgbStr},0.08)`;
    ctx.fill();

    // checkmark
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy);
    ctx.lineTo(cx - 2, cy + 7);
    ctx.lineTo(cx + 9, cy - 8);
    ctx.stroke();
  },

  _genId(type, name, date) {
    const prefix = type === 'completion' ? 'CRC' : 'CRM';
    const hash = btoa(`${name}${date}`).replace(/[^A-Z0-9]/gi,'').toUpperCase().slice(0,8);
    return `${prefix}-${hash}`;
  },

  download(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename || 'circle-certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
};
