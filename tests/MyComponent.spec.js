import MyComponent from '../src/components/MyComponent.vue'

describe('MyComponent.vue', function () {
  it('Component told \'Hello!!\'', function () {
    expect(MyComponent.data().message).to.be.equal('Hello!!')
  })
})
