import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'

export function buildResolvers (options: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {},
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index']
    }
}
