class DynamicArray {
	private data: any[];
	private capacity: number;
	private length: number;

	constructor(initialCapacity: number = 1) {
		this.data = new Array(initialCapacity);
		this.capacity = initialCapacity;
		this.length = 0;
	}
}
