const fieldLabels = {
  name: 'Name',
  source: 'Source',
  sourceId: 'Source Id',
  determinationMethod: 'Determination Method',
  length: 'Length',
  molecule: 'Number of Molecule',
  numOfDomains: 'Number of Domains',
  numOfExteriorLoops: 'Number of Exterior Loops',
  numOfSegments: 'Number of Segments',
  organism: 'Organism',
  type: 'Type',
  validationTechnique: 'Validation Technique',
  numOfPairedBases: 'Number of Paired Bases',
  numOfUnpairedBases: 'Number of Unpaired Bases'
};

export function getFieldLabel(field) {
  return fieldLabels[field] || field;
} 