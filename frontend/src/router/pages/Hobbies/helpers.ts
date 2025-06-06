export const renderColoredHeader = (text: string) => {
  return text.replace(
    /<h1>(.*?)<\/h1>/g,
    (_, content) =>
      `<span class="tag">&lt;h1&gt;</span><span class="tag-content">${content}</span><span class="tag">&lt;/h1&gt;</span>`,
  )
}

export const renderColoredList = (items: string[]) => {
  const list = items
    .map((item) =>
      item.replace(
        /<li>(.*?)<\/li>/g,
        (_, content) =>
          `<span class="tag">&lt;li&gt;</span><span class="tag-content">${content}</span><span class="tag">&lt;/li&gt;</span>`,
      ),
    )
    .join('')
  return `<span class="tag">&lt;ul&gt;</span>${list}<span class="tag">&lt;/ul&gt;</span>`
}
