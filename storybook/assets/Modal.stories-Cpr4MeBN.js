import{E as e,r as t}from"./iframe-cnRAJkFh.js";import{t as n}from"./react-dom-Dok2oYfh.js";import{t as r}from"./jsx-runtime-Cphn1GUH.js";import{t as i}from"./Button-dUN-2uHi.js";var a={Overlay:`_Overlay_542mp_1`,Content:`_Content_542mp_27`,Button:`_Button_542mp_49`},o=e(n()),s=e(r());const c=({children:e,onClose:t,showClose:n})=>{let r=document.getElementById(`portal-root`);return r?(0,o.createPortal)((0,s.jsx)(`div`,{className:a.Overlay,children:(0,s.jsxs)(`div`,{className:a.Content,onClick:e=>e.stopPropagation(),children:[n&&(0,s.jsx)(`button`,{className:a.Button,onClick:t,children:`✖`}),e]})}),r):null};var l=e(t()),u={title:`UI/Modal`,component:c,tags:[`autodocs`],argTypes:{onClose:{action:`closed`,description:`Callback fired when the modal is closed.`,table:{category:`Props`}},showClose:{description:`Whether the close button is visible on the modal.`,table:{category:`Props`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},children:{description:`Content rendered inside the modal window.`,table:{category:`Props`}},heading:{control:`text`,description:`Title displayed at the top of the modal content.`,table:{category:`Story`}},message:{control:`text`,description:`Primary descriptive text inside the modal.`,table:{category:`Story`}},openText:{control:`text`,description:`Label for the modal button.`,table:{category:`Story`}},confirmText:{control:`text`,description:`Label for the primary confirmation button.`,table:{category:`Story`}},cancelText:{control:`text`,description:`Label for the secondary cancel button.`,table:{category:`Story`}},onConfirm:{action:`confirmed`,description:`Callback executed when the confirm button is pressed.`,table:{category:`Story`}},onCancel:{action:`cancelled`,description:`Callback executed when the cancel button is pressed.`,table:{category:`Story`}}},parameters:{docs:{description:{component:`@ignore\r
A reusable portal-based modal component.\r

The Modal renders its children into a DOM node outside\r
the main React tree using \`createPortal\`.\r

#### Remarks\r
Requires a \`#portal-root\` element in the DOM.\r

#### Example\r
\`\`\`tsx\r
<Modal onClose={() => setIsOpen(false)}>\r
  <h2>Game Over!</h2>\r
  <p>Player 1 Wins!</p>\r
</Modal>\r
\`\`\``}}}},d=e=>{let[t,n]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=document.getElementById(`portal-root`);return e||(e=document.createElement(`div`),e.id=`portal-root`,document.body.appendChild(e)),()=>{e?.remove()}},[]);let r=()=>{n(!1),e.onClose?.()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{onClick:()=>n(!0),children:e.openText}),t&&(0,s.jsxs)(c,{onClose:r,showClose:e.showClose,children:[(0,s.jsx)(`h2`,{children:e.heading}),(0,s.jsx)(`p`,{children:e.message}),(0,s.jsx)(`p`,{children:e.children}),(0,s.jsxs)(`div`,{children:[e.confirmText&&(0,s.jsx)(i,{onClick:()=>{e.onConfirm?.(),r()},children:e.confirmText}),e.cancelText&&(0,s.jsx)(i,{onClick:()=>{e.onCancel?.(),r()},children:e.cancelText})]})]})]})};const f={render:e=>(0,s.jsx)(d,{...e}),args:{heading:`Game Over!`,message:`Player 1 Wins!`,openText:`Show Results`,confirmText:`Close`,showClose:!0},parameters:{docs:{description:{story:`Basic modal with a single close button.`}}}},p={render:e=>(0,s.jsx)(d,{...e}),args:{heading:`Account Deletion`,message:`Are you sure you want to delete your account?`,openText:`Delete Account`,confirmText:`Yes. Delete`,cancelText:`No. Cancel`,children:`This action cannot be undone!`,showClose:!1},parameters:{docs:{description:{story:`Confirmation dialog to demonstrate cancel and confirm actions.`}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    heading: 'Game Over!',
    message: 'Player 1 Wins!',
    openText: 'Show Results',
    confirmText: 'Close',
    showClose: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic modal with a single close button.'
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`@ignore`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    heading: 'Account Deletion',
    message: 'Are you sure you want to delete your account?',
    openText: 'Delete Account',
    confirmText: 'Yes. Delete',
    cancelText: 'No. Cancel',
    children: 'This action cannot be undone!',
    showClose: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Confirmation dialog to demonstrate cancel and confirm actions.'
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`@ignore`,...p.parameters?.docs?.description}}};const m=[`Default`,`Deletion`];export{f as Default,p as Deletion,m as __namedExportsOrder,u as default};