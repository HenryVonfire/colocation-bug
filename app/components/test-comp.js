import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TestCompComponent extends Component {
  @tracked testProperty;
}
