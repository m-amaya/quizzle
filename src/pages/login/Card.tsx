import {
  Card as MantineCard,
  CardProps as MantineCardProps,
  Stack,
  Text
} from "@mantine/core";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import classes from "./Card.module.css";

type CardProps = {
  bg?: MantineCardProps["bg"];
  c?: MantineCardProps["c"];
  children?: ReactNode;
  Icon?: IconType;
};

export function Card({ bg, c, children, Icon }: CardProps) {
  return (
    <MantineCard bg={bg} c={c} className={classes.card} shadow="sm">
      <Stack align="center" h="100%" justify="center">
        {Icon && <Icon size={90} />}
        <Text c="black" ff="heading" fw={700} style={{ fontSize: 35 }}>
          {children}
        </Text>
      </Stack>
    </MantineCard>
  );
}
