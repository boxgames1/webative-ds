// storybook
import React from "react";
import { storiesOf } from "@storybook/react";

import Button from ".";
import { number, text, withKnobs } from "@storybook/addon-knobs";

storiesOf("Button", module)
  .add("Button", () => (
    <div>
      <Button label="Submit" />
    </div>
  ))
  .addDecorator(withKnobs)
  .add("disabled", () => <button disabled>Helloooo</button>)
  .add("as dynamic variables", () => {
    const label = text("label", "testing knobs");
    const stars = number("stars", 0);
    return <Button label={label} stars={stars} onClick={() => alert("wowowoww")} />;
  });
