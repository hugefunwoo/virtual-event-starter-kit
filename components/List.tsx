import { Stack, StackProps } from '@chakra-ui/react';
import * as React from 'react';

export const List = (props: StackProps) => {
  const { children, ...stackProps } = props;
  const items = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<any>>(React.isValidElement)
        .map((item, index, array) =>
          index + 1 === array.length ? React.cloneElement(item, { isLastItem: true }) : item
        ),
    [children]
  );
  return (
    <Stack as="ul" {...stackProps}>
      {items}
    </Stack>
  );
};
