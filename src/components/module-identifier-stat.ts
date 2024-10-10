import { type IdentifierStatOptions } from '../commands';
import { $t } from '../shared';
import compose from './_internal/compose';
import createRender from './_internal/create-render';
import heading from './_internal/heading';
import horizontalRules from './_internal/horizontal-rules';
import table from './_internal/table';

function moduleIdentifierStat(stats: IdentifierStatOptions[]) {
    return compose(
        horizontalRules(),
        heading($t('IDENTIFIER_STAT'), 1),
        table(
            [$t('FILE'), $t('SUCCESS'), $t('SKIP'), $t('FAILED')],
            stats.map((item) => [item.filename, item.successCount, item.noopCount, item.failedCount]),
        ),
    );
}

export default createRender<Parameters<typeof moduleIdentifierStat>>(moduleIdentifierStat);