/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Icon } from "../../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function ButtonsActions({ reRequest, seeCode, downloadCSV, href }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [seePage, setSeePage] = useState(false);

  const openPageLinks = () => {
    setSeePage(!seePage);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between deskGroupMobile">
        <Button
          size="md"
          text={t("HEADER.evaluate_new_page")}
          iconRight={<Icon name="AMA-Setalongaoficial-Line" />}
          onClick={() => navigate("/")}
        />

        <div className="d-flex flex-row gap-3">
          <Button
            size="md"
            variant="secondary"
            text={t("RESULTS.actions.re_evaluate")}
            iconRight={<Icon name="AMA-Reload-Line" />}
            onClick={() => reRequest()}
          />

          <div>
            <Button
              size="md"
              variant="secondary"
              text={t("RESULTS.actions.see_page")}
              iconRight={<Icon name="AMA-Code-Line" />}
              onClick={openPageLinks}
            />
            {seePage && (
              <u className="dropdown-content show_dropdown">
                <li>
                  <button onClick={() => seeCode()}>{t("RESULTS.actions.pagecode")}</button>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={href}
                    rel="noreferrer"
                  >
                    {t("RESULTS.actions.open_webpage")}
                  </a>
                </li>
              </u>
            )}
          </div>

          <div>
            <Button
              size="md"
              variant="secondary"
              text={t("RESULTS.actions.download")}
              iconRight={<Icon name="AMA-DownloadSetacurta-Line" />}
              onClick={downloadCSV}
              download="eval.csv"
            />
          </div>
        </div>
      </div>

      <div className="group_mobile">
        <div className="firstGroupContainer">
          <Button
            size="md"
            text={t("HEADER.evaluate_new_page")}
            iconRight={<Icon name="AMA-Setalongaoficial-Line" />}
            onClick={() => navigate("/")}
          />

          <div>
            <Button
              size="md"
              variant="secondary"
              text={t("RESULTS.actions.see_page")}
              iconRight={<Icon name="AMA-Code-Line" />}
              onClick={openPageLinks}
            />
            {seePage && (
              <u className="dropdown-content show_dropdown">
                <li>
                  <button onClick={() => seeCode()}>{t("RESULTS.actions.pagecode")}</button>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={href}
                    rel="noreferrer"
                  >
                    {t("RESULTS.actions.open_webpage")}
                  </a>
                </li>
              </u>
            )}
          </div>
        </div>

        <div className="secondGroupContainer">
          <Button
            size="md"
            variant="secondary"
            text={t("RESULTS.actions.re_evaluate")}
            iconRight={<Icon name="AMA-Reload-Line" />}
            onClick={() => reRequest()}
          />

          <div>
            <Button
              size="md"
              variant="secondary"
              text={t("RESULTS.actions.download")}
              iconRight={<Icon name="AMA-DownloadSetacurta-Line" />}
              onClick={downloadCSV}
              download="eval.csv"
            />
          </div>
        </div>
      </div>
    </>
  );
}
