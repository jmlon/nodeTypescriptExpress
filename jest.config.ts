import type { Config } from '@jest/types';

// TODO Do not run the test from both /dist and /tests (manually erase test from /dist/tests)

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    setupFiles: ['dotenv/config']
};

export default config;