const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // Cascade will delete a complete row instead of just the property you are targetting. If you delete a reader_id then the associated LibraryCard row will be deleted
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// Exporting the new Reader and LibraryCard models with the newly added associations above
module.exports = { Reader, LibraryCard };
