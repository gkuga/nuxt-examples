import type { Meta, StoryObj } from '@storybook/vue3'

import Footer from '../components/Footer.vue'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],

} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const FooterStory: Story = {
  args: {},
}
