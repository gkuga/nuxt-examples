import type { Meta, StoryObj } from '@storybook/vue3'

import Header from '../components/Header.vue'

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderStory: Story = {
  args: {},
}
