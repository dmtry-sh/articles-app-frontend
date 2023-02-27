import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type IBuildOptions } from './types/config'

export function buildWebpackConfig (options: IBuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options

    return {
        mode,

        // стартовая точка приложения
        entry: paths.entry,

        // добавляет source maps
        devtool: isDev ? 'inline-source-map' : undefined,

        // настройка вывода сборки
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },

        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),

        devServer: isDev ? buildDevServer(options) : undefined
    }
}
