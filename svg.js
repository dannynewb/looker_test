looker.plugins.visualizations.add({
    // Id and Label are legacy properties that no longer have any function besides documenting
    // what the visualization used to have. The properties are now set via the manifest
    // form within the admin/visualizations page of Looker
    id: "hello_world",
    label: "Hello World",
    options: {
      font_size: {
        type: "string",
        label: "Font Size",
        values: [
          {"Large": "large"},
          {"Small": "small"}
        ],
        display: "radio",
        default: "large"
      }
    },
    // Set up the initial state of the visualization
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" width="80" height="50" rx="5" stroke="white" style="fill:#E23A96" />
      <rect x="80" width="80" height="50" rx="5" stroke="white" style="fill:#5FC2C3" />
  
      <rect x="40" width="80" height="50" stroke="white" style="fill:#bd4e96" />
      <rect x="80" width="40" height="50" stroke="white" style="fill:#9287B2" />
  
      <circle cx="40" cy="25" r="15" style="fill:rgba(50,50,50,0.5)" />
      <circle cx="100" cy="25" r="7" style="fill:rgba(50,50,50,0.5)" />
    </svg>`;
  
    },
    // Render in response to the data or settings changing
    updateAsync: function(data, element, config, queryResponse, details, done) {
  
      // Clear any errors from previous updates
      this.clearErrors();
  
      // We are done rendering! Let Looker know.
      done()
    }
  });