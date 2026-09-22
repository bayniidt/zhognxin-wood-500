"use client";

import { useTranslation } from "../shared/i18n";

const DOCUMENTS = [
  "commercialInvoice",
  "packingList",
  "billOfLading",
  "certificateOrigin",
  "phytosanitary",
  "fsc",
  "eudr",
  "eutr",
] as const;

export function ExportDocuments() {
  const { t } = useTranslation();

  return (
    <section className="el-section el-section-gray">
      <div className="el-section-inner">
        <div className="el-two-column el-documents-layout">
          <div>
            <span className="el-label">{t("exportDocumentation")}</span>
            <h2 className="el-heading">{t("documentsTitle")}</h2>
            <p className="el-copy">{t("documentsText")}</p>
          </div>
          <ul className="el-document-list">
            {DOCUMENTS.map((documentKey) => (
              <li key={documentKey}>{t(documentKey)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
