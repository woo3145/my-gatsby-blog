interface AllSettingsQueryResult<T> {
  allContentsJson: {
    nodes: T[];
  };
}

interface AllHeroQueryResult<T> {
  allHeroJson: {
    nodes: T[];
  };
}
