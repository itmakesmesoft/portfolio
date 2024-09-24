import { Switch } from "elast-ui";
import { useState } from "react";
import { Container, Title } from "../Project5";

export default function SwitchSection() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Container>
      <Title>Switch</Title>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-green-700"
      >
        <span className="w-4 h-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6 z-10" />
      </Switch>
    </Container>
  );
}
