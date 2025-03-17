export const checkEmailExists = (
  state: { byId: Record<string, { email: string }> },
  email: string
): boolean => {
  const normalizedEmail = email.toLowerCase();

  for (const item of Object.values(state.byId)) {
    if (item.email.toLowerCase() === normalizedEmail) {
      return true;
    }
  }

  return false;
};
