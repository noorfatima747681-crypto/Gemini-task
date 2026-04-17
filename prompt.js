export function getPrompt() {
  // Gather context

  // Debug context

  // Return the prompt
  return `

---

FAQs:
How can I reset my password?
Answer: You can reset your password from the top-right menu.
Context: profile.html page

How can I ask for a refund?
Answer: You can ask for a refund on the order page from the bottom-right corner.
Context: orders.html page, only if the user has placed at least 1 order.

How do I place an order?
Answer: you can place an order by clicking on the Add order button.
Context: orders.html page

How can I change my email address?
Answer: You can change your email address from the top-right menu.
Context: when logged in and browsing the profile.html page

---

`;
}
