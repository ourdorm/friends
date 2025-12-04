/**
 * User data for the tilde community.
 * Add new users by appending to this array.
 */

export interface UserLink {
  label: string;
  url: string;
}

export interface User {
  username: string;
  bioShort: string;
  bioLong: string;
  avatar?: string;
  links?: UserLink[];
}

export const users: User[] = [
  {
    username: 'irisnk',
    bioShort: 'Indie artist, dev, and soul.',
    bioLong: `More about me on my website`,
    avatar: 'https://irisnk.me/index/pfp.png',
    links: [
      { label: 'website', url: 'https://irisnk.me' },
      { label: 'git', url: 'https://git.elrant.team/irisnk' },
      { label: 'fediverse', url: 'https://dorm.social/@irisnk' },
    ],
  },
];

/**
 * Get all usernames for prerendering
 */
export function getAllUsernames(): string[] {
  return users.map((u) => u.username);
}

/**
 * Find a user by username
 */
export function findUserByUsername(username: string): User | undefined {
  return users.find((u) => u.username.toLowerCase() === username.toLowerCase());
}
