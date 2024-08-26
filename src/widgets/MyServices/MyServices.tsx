import { IMyServices } from './MyServices.types.ts';
import { Typography } from '../../shared/Typography/index.ts';
import { ButtonLink } from '../../shared/ButtonLink/index.ts';
import { TabsCustom } from '../../shared/TabsCustom/index.ts';

export function MyServices({ className }: IMyServices) {
  return (
    <article className={`widgets ${className} flex flex-col`}>
      <Typography
        value="Мои  услуги"
        size="large"
        className="border-b border-gray-300 px-8 py-3"
      />
      <TabsCustom />
      <div className="widgets-footer">
        <ButtonLink link="/services" name="Посмотреть все" />
      </div>
    </article>
  );
}
