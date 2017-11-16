---
layout: page
title: Résumé
permalink: /resume/
---

## Akshay Ranganath
[akshay@akshayranganath@com](mailto:akshay@akshayranganath@com)
[LinkedIn Profile](https://www.linkedin.com/in/akshayranganath)
[Twitter](https://twitter.com/rakshay)
[Github](https://github.com/akshayranganath)

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var container = document.getElementById('example4.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Role' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
      [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ]]);

    var options = {
      timeline: { groupByRowLabel: false }
    };

    chart.draw(dataTable, options);
  }
</script>

<div id="example4.2" style="height: 200px;"></div>