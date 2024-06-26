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
  numOfUnpairedBases: 'Number of Unpaired Bases',
  numOfStems: 'Number of Stems',
  maxStemLength: 'Maximum Stem Length',
  minStemLength: 'Minimum Stem Length',
  numOfBasePairsInStems: 'Number of Base Pairs in Stems',
  avgStemLength: 'Average Stem Length',
  numOfHairpinLoops: 'Number of Hairpin Loops',
  maxHairpinLength: 'Maximum Stem Length',
  minHairpinLength: 'Minimum Stem Length',
  avgHairpinLength: 'Average Stem Length',
  numOfBulges: 'Number of Bulges',
  maxBulgeLength: 'Maximum Bulge Length',
  minBulgeLength: 'Minimum Bulge Length',
  avgBulgeLength: 'Average Bulge Length',
  numOfInternalLoops: 'Number of Internal Loops',
  avgInternalLength: 'Average Internal Length',
  maxInternalLength: 'Maximum Internal Length',
  minInternalLength: 'Minimum Internal Length',
  numOfMultiLoops: 'Number of Multi Loops',
  avgMultiLength: 'Average Multi Length',
  maxMultiLength: 'Maximum Multi Length',
  minMultiLength: 'Minimum Multi Length',
  maxBandLength: 'Maximum Band Length',
  minBandLength: 'Minimum Band Length',
  numOfBandsInPseudoknots: 'Number of Bands in Pseudoknots',
  numOfBasePairsInBands: 'Number of Base Pairs in Bands',
  avgBandLength: 'Average Band Length',
  numOfPseudoknots: 'Number of Pseudoknots',
  nPerPage: 'Number per Page',
  page: 'Page',
};

export function getFieldLabel(field) {
  return fieldLabels[field] || field;
} 