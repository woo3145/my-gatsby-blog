interface AllSettingsQueryResult<T> {
  allContentsJson: {
    nodes: T[];
  };
}
