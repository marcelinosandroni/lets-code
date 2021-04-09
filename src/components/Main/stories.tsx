import { Story, Meta } from '@storybook/react/types-6-0'
// import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title',
    description: 'default desc'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Oi',
  description: 'Description of oi'
}

export const Default: Story = (args) => <Main {...args} />
