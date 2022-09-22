import React from "react";
import "../../../styles/scss/styles.scss";
import { BreakdownCard } from "../../../components/i-feat";

export default function SpecsExpand() {
  return (
    <div className="rec-org-border">
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard
        title="Brand"
        desc="1x USB 2.0
  1x USB 3.2 Gen 1
  1x USB-C 3.2 Gen 1 (support data transfer only)
  1x HDMI 1.4b
  1x Ethernet (RJ-45)
  1x Headphone / microphone combo jack (3.5mm)
  1x Power connector
"
      />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
      <BreakdownCard title="Brand" desc="intel i3" />
    </div>
  );
}
