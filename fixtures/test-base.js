import { test as base } from '@playwright/test';

export const test = base.extend({
    loginData: {
        username: 'user@example.com',
        password: 'password123'
    }
}
)