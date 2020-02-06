# Checkbox

Use `sc-checkbox` to toggle boolean flags:

{{#docs-demo as |demo|}}
  {{#demo.example name="sc-checkbox.hbs"}}
    <ScCheckbox @checked={{rememberMe}} @click={{action (mut rememberMe) (not rememberMe)}}>Remember me</ScCheckbox>
  {{/demo.example}}
  {{demo.snippet "sc-checkbox.hbs"}}
{{/docs-demo}}
