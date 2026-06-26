import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "70px",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "2px solid rgba(255,255,255,0.12)",
            borderRadius: "44px",
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.32), rgba(0,0,0,0.95) 45%, rgba(255,255,255,0.06))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "26px",
                background: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "56px",
                fontWeight: 900,
              }}
            >
              R
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "42px", fontWeight: 900 }}>Radio POS</div>
              <div style={{ fontSize: "24px", color: "rgba(255,255,255,0.72)" }}>
                Complete POS Solutions
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1.02,
                fontWeight: 900,
                maxWidth: "860px",
              }}
            >
              POS Machines, Billing Software & Setup
            </div>
            <div
              style={{
                fontSize: "30px",
                color: "rgba(255,255,255,0.72)",
                maxWidth: "850px",
                lineHeight: 1.35,
              }}
            >
              Barcode setup • Inventory control • Cloud reports • Installation • Training • Support
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "25px",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            <div>Serving Middle East</div>
            <div>WhatsApp: +971 50 903 1312</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
