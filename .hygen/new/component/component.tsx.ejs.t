---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react'

interface I<%= component_name %>Props {}

export const <%= component_name %>: React.FC<I<%= component_name %>Props> = props => {
  const {} = props
  return <div data-testid="test" />;
};