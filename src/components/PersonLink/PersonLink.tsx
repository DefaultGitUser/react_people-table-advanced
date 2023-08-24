import classNames from 'classnames';

import { Link, useSearchParams } from 'react-router-dom';
import { Person } from '../../types';
import { SexEnum } from '../../types/SexEnum';
import { HighlightedText } from '../HighlightedText';
import { FilterEnum } from '../../types/FilterEnum';

type Props = {
  person: Person
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, slug, sex } = person;
  const [searchFilters] = useSearchParams();
  const q = searchFilters.get(FilterEnum.Query);

  return (
    <Link
      to={{
        pathname: `../${slug}`,
        search: searchFilters.toString(),
      }}
      className={classNames(
        { 'has-text-danger': sex === SexEnum.Woman },
      )}
    >
      <HighlightedText text={name} highlight={q} />
    </Link>
  );
};
