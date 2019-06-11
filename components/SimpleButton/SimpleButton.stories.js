import { storiesOf } from '@storybook/vue'
import SimpleButton from './SimpleButton'

storiesOf('SimpleButton', module)
  .add('normal', () => ({
    components: { SimpleButton },
    template: `
     <SimpleButton
        :to="values[1]"
        :label="values[0]"
      />
    `,
    data: () => ({
      values: [
        'Les mer',
        'http://digi.no'
      ]
    })
  }))
