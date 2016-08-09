var onRun = function(context) {
  log('Select all exportable in current page.');
  
  var doc = context.document
  // Unselect everything
  doc.currentPage().deselectAllLayers()

  var exportables = doc.currentPage().exportableLayers()
  for (var i = 0; i < exportables.length; i++) {
    var exportable = exportables.objectAtIndex(i)
    log("  " + exportable.name())
    exportable.select_byExpandingSelection(true, true)
  }
};
