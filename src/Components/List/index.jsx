import React, { memo } from "react";

import { ListWrapper, ListTitleWrapper, ListContentWrapper } from "./style";

const ListTitle = memo(({ children }) => (
  <ListTitleWrapper>{children}</ListTitleWrapper>
));

const ListContent = memo(({ children, action }) => (
  <ListContentWrapper>{children}</ListContentWrapper>
));

const List = memo(({ children }) => <ListWrapper>{children}</ListWrapper>);

List.Title = ListTitle;
List.Content = ListContent;

export default List;
