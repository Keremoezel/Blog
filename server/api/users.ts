import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const response = await fetch('https://api.github.com/users/keremoezel/repos')
    const data = await response.json()
    return data
})  