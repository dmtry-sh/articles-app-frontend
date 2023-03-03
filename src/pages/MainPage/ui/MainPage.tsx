import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

function MainPage () {
    const { t } = useTranslation()

    const [value, setValue] = useState('');

    const onChange = (v: string) => {
        setValue(v);
    }

    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onChange={onChange}
                placeholder={'Введите текст'}
            />
        </div>
    )
}

export default MainPage
