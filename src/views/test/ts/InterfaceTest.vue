<script setup lang="ts">
import useHighlight from '@/hooks/useHighlight'
import { type IUser } from '@/types'

useHighlight()
const user: IUser = {
  name: 'sven',
  id: 102
}
console.log('====================================')
console.log(user)
console.log('====================================')
</script>
<template>
  <div>
    <pre>
      <code class="language-javascript">
        import { type IUser } from '@/types'
            const user: IUser = {
                name: 'sven',
                id: 102
            }
        console.log('====================================')
        console.log(user)
        console.log('====================================') 
      </code>
    </pre>
  </div>
</template>
