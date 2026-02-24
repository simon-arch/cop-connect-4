import"./jsx-runtime-Cphn1GUH.js";import{t as e}from"./Button-dUN-2uHi.js";var t={title:`UI/Button`,component:e,argTypes:{children:{control:`text`,description:`The text displayed inside the button.`},disabled:{control:`boolean`,description:`When true, the button is not clickable and appears visually disabled.`},onClick:{action:`clicked`,description:`Function that gets called when the button is clicked.`}},tags:[`autodocs`],parameters:{docs:{description:{component:`@ignore\r
A reusable, styled button component that wraps the native HTML \`<button>\`.\r

The component is fully compatible with standard HTML button attributes,\r
making it a drop-in replacement.\r

Uses baked in CSS modules to provide consistent styling across the app.\r

#### Remarks\r
Supports all native button props like \`onClick\`, \`disabled\`, \`type\`, etc.\r

#### Example\r
\`\`\`tsx\r
<Button onClick={() => console.log('Clicked!')} disabled={loading}>\r
  Play Again\r
</Button>\r
\`\`\``}}}};const n={args:{children:`Click Me`,disabled:!1},parameters:{docs:{description:{story:`Default enabled button that can be clicked.`}}}},r={args:{children:`Cannot Click`,disabled:!0},parameters:{docs:{description:{story:`Button in a disabled state; user cannot interact with it.`}}}},i={args:{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,disabled:!1},parameters:{docs:{description:{story:`Button with very long text to demonstrate text wrapping and height scaling.`}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Default enabled button that can be clicked.'
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:`@ignore`,...n.parameters?.docs?.description}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Cannot Click',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Button in a disabled state; user cannot interact with it.'
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`@ignore`,...r.parameters?.docs?.description}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with very long text to demonstrate text wrapping and height scaling.'
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`@ignore`,...i.parameters?.docs?.description}}};const a=[`Default`,`Disabled`,`LongText`];export{n as Default,r as Disabled,i as LongText,a as __namedExportsOrder,t as default};