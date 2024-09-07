import { Button } from "@components/ui/button";
import { domToPng } from "modern-screenshot";
import { useState } from "react";

function InsightsScreenShoot() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const takeScreenshot = async () => {
    const insightPage = document.querySelector(".screenshoot") as HTMLElement;
    if (!insightPage || isTakingScreenshot) return;

    setIsTakingScreenshot(true);

    try {
      domToPng(insightPage,{scale: 4, backgroundColor: "#28334D",style:{color:"#EFF4FF"}}).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = dataUrl;
        link.click();
      });
    } catch (error) {
      console.error("Screenshot capture failed:", error);
    } finally {
      setIsTakingScreenshot(false);
    }
  };
  return (
    <Button className="p-0 rounded-xl h-9 overflow-hidden w-9" onClick={takeScreenshot} disabled={isTakingScreenshot}>
      <img src="/svg/camera.svg" alt="Screenshoot" className="size-5 shrink-0" />
    </Button>
  );
}

export default InsightsScreenShoot;
