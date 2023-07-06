import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { auth } from "@canva/user";
import * as React from "react";
import useEffect from "react";
import styles from "styles/components.css";

export const App = () => {
  var result;
  useEffect(() => {
    async function drAuthentication(){
      result = await auth.requestAuthentication();
    }
    drAuthentication();
    console.log(result)
  }, []);
  
  const onClick = () => {
    addNativeElement({
      type: "TEXT",
      children: ["Hello world!"],
    });
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          You're connected. Press the button below to access your design on other Long Drive applications.
        </Text>
        <Button variant="primary" onClick={onClick} stretch>
          Export Design
        </Button>
      </Rows>
    </div>
  );
};
